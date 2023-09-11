// @ts-check
const fsp = require('fs/promises')
const path = require('path')

const kProjPath = path.resolve(__dirname, '..')

/**
 * Gets Package pathing info the package specified in command line arguments.
 */
async function getPackagePaths () {
  const knownPackages = await fsp.readdir(path.resolve(kProjPath, 'packages'))

  const [,, packageName] = process.argv

  if (!packageName || !knownPackages.includes(packageName)) {
    console.error(`Usage: preparePackage <package-name>

Package name is invalid. Package must be one of:${['', ...knownPackages].join('\n  ')}`)
    process.exit(1)
  }

  return {
    source: path.resolve(kProjPath, 'packages', packageName),
    dist: path.resolve(kProjPath, 'dist', packageName),
    packageJson: path.resolve(kProjPath, 'packages', packageName, 'package.json'),
  }
}

/**
 * Copies files specified in `files` from `sourcePath` to `targetPath`.
 *
 * @param {string} sourcePath
 * @param {string} targetPath
 * @param {(string|[string, string])[]} files
 */
async function copyFiles (sourcePath, targetPath, files) {
  if (Array.isArray(files)) {
    await Promise.all(files.map((file) => {
      const [inFileName, outFileName] = Array.isArray(file) ? file : [file, file]
      return fsp.copyFile(
        path.resolve(sourcePath, inFileName),
        path.resolve(targetPath, outFileName),
      )
    }))
  }
}

/**
 * Copies files in the `common` directory to `targetPath`.
 *
 * @param {string} targetPath
 */
async function copyCommonFiles (targetPath) {
  const commonDir = path.resolve(kProjPath, 'common')
  const commonFiles = await fsp.readdir(commonDir)
  return copyFiles(commonDir, targetPath, commonFiles)
}

/**
 * Writes a distributable `package.json` file.
 *
 * Removes known development fields from `packageJson` and writes the result to `outDir`.
 *
 * @param {object} packageJson
 * @param {string} outDir
 * @returns {Promise<void>}
 */
function writeDistPackageJson (packageJson, outDir) {
  const distPackageJson = { ...packageJson }

  // remove development fields
  delete distPackageJson.scripts
  delete distPackageJson.devDependencies
  delete distPackageJson.distFiles
  delete distPackageJson.resolutions
  delete distPackageJson.packageManager

  // write package.json to dist
  return fsp.writeFile(
    path.resolve(outDir, 'package.json'),
    JSON.stringify(distPackageJson, null, 2),
  )
}

(async function main () {
  const paths = await getPackagePaths()
  // eslint-disable-next-line import/no-dynamic-require -- This is fine, we're in a script
  const packageJson = require(paths.packageJson)

  await fsp.mkdir(paths.dist, { recursive: true })

  await Promise.all([
    copyCommonFiles(paths.dist),
    copyFiles(paths.source, paths.dist, [
      'README.md',
      ...(Array.isArray(packageJson.distFiles) ? packageJson.distFiles : []),
    ]),
    writeDistPackageJson(packageJson, paths.dist),
  ])
}())
