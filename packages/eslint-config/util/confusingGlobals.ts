import confusingGlobals from 'confusing-browser-globals'

export interface RestrictedGlobal {
  name: string
  message?: string
}

const globals = confusingGlobals.reduce<RestrictedGlobal[]>(
  (acc: RestrictedGlobal[], globProp: string) => {
    switch (globProp) {
      case 'self': // Removed due to self having use in workers.
      case 'location': // Removed since location is a commonly used and accepted browser global.
        // Globals we do not consider confusing.
        break

      case 'opera':
        // Non-standard globals.
        acc.push({
          name: globProp,
          message: `\`${globProp}\` is a non-standard browser global, and should never be used.`,
        })
        break

      default:
        // Confusing globals.
        acc.push({
          name: globProp,
          message: `Use of \`${globProp}\` is confusing. Use \`window.${globProp}\` instead.`,
        })
        break
    }

    return acc
  },
  [],
)

export default globals
