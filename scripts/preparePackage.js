// @ts-check
const fsp = require('fs/promises')
const path = require('path')

const kProjPath = path.resolve(__dirname, '..')

async function getPackageInfo () {
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
 * @param {string} sourcePath
 * @param {string} targetPath
 * @param {(string|[string, string])[]} files
 */
async function copyFiles (sourcePath, targetPath, files) {
  if (Array.isArray(files)) {
    // copy listed files from packageRoot to DistRoot
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
 * @param {string} targetPath
 */
async function copyCommonFiles (targetPath) {
  const commonDir = path.resolve(kProjPath, 'common')
  const commonFiles = await fsp.readdir(commonDir)
  return copyFiles(commonDir, targetPath, commonFiles)
}

/**
 * @param {string} distPackagePath
 * @param {object} packageJson
 * @returns {Promise<void>}
 */
function writeDistPackageJson (distPackagePath, packageJson) {
  const distPackageJson = { ...packageJson }

  // remove development fields
  delete distPackageJson.scripts
  delete distPackageJson.devDependencies
  delete distPackageJson.distFiles
  delete distPackageJson.resolutions
  delete distPackageJson.packageManager

  // write package.json to dist
  return fsp.writeFile(
    path.resolve(distPackagePath, 'package.json'),
    JSON.stringify(distPackageJson, null, 2),
  )
}

(async function main () {
  const paths = await getPackageInfo()
  // eslint-disable-next-line import/no-dynamic-require -- This is fine, we're in a script
  const packageJson = require(paths.packageJson)

  // create dist/packageName
  await fsp.mkdir(paths.dist, { recursive: true })

  await Promise.all([
    // copy common files
    copyCommonFiles(paths.dist),

    // copy dist files
    copyFiles(paths.source, paths.dist, [
      'README.md',
      ...(Array.isArray(packageJson.distFiles) ? packageJson.distFiles : []),
    ]),

    // prepare and copy package.json
    writeDistPackageJson(paths.dist, packageJson),
  ])
}())
