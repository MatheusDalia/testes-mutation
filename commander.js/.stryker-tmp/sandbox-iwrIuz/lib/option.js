// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
const {
  InvalidArgumentError
} = require('./error.js');
class Option {
  /**
   * Initialize a new `Option` with the given `flags` and `description`.
   *
   * @param {string} flags
   * @param {string} [description]
   */

  constructor(flags, description) {
    if (stryMutAct_9fa48("0")) {
      {}
    } else {
      stryCov_9fa48("0");
      this.flags = flags;
      this.description = stryMutAct_9fa48("3") ? description && '' : stryMutAct_9fa48("2") ? false : stryMutAct_9fa48("1") ? true : (stryCov_9fa48("1", "2", "3"), description || (stryMutAct_9fa48("4") ? "Stryker was here!" : (stryCov_9fa48("4"), '')));
      this.required = flags.includes(stryMutAct_9fa48("5") ? "" : (stryCov_9fa48("5"), '<')); // A value must be supplied when the option is specified.
      this.optional = flags.includes(stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), '[')); // A value is optional when the option is specified.
      // variadic test ignores <value,...> et al which might be used to describe custom splitting of single argument
      this.variadic = (stryMutAct_9fa48("9") ? /\w\.\.\.[^>\]]$/ : stryMutAct_9fa48("8") ? /\W\.\.\.[>\]]$/ : stryMutAct_9fa48("7") ? /\w\.\.\.[>\]]/ : (stryCov_9fa48("7", "8", "9"), /\w\.\.\.[>\]]$/)).test(flags); // The option can take multiple values.
      this.mandatory = stryMutAct_9fa48("10") ? true : (stryCov_9fa48("10"), false); // The option must have a value after parsing, which usually means it must be specified on command line.
      const optionFlags = splitOptionFlags(flags);
      this.short = optionFlags.shortFlag; // May be a short flag, undefined, or even a long flag (if option has two long flags).
      this.long = optionFlags.longFlag;
      this.negate = stryMutAct_9fa48("11") ? true : (stryCov_9fa48("11"), false);
      if (stryMutAct_9fa48("13") ? false : stryMutAct_9fa48("12") ? true : (stryCov_9fa48("12", "13"), this.long)) {
        if (stryMutAct_9fa48("14")) {
          {}
        } else {
          stryCov_9fa48("14");
          this.negate = stryMutAct_9fa48("15") ? this.long.endsWith('--no-') : (stryCov_9fa48("15"), this.long.startsWith(stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), '--no-')));
        }
      }
      this.defaultValue = undefined;
      this.defaultValueDescription = undefined;
      this.presetArg = undefined;
      this.envVar = undefined;
      this.parseArg = undefined;
      this.hidden = stryMutAct_9fa48("17") ? true : (stryCov_9fa48("17"), false);
      this.argChoices = undefined;
      this.conflictsWith = stryMutAct_9fa48("18") ? ["Stryker was here"] : (stryCov_9fa48("18"), []);
      this.implied = undefined;
      this.helpGroupHeading = undefined; // soft initialised when option added to command
    }
  }

  /**
   * Set the default value, and optionally supply the description to be displayed in the help.
   *
   * @param {*} value
   * @param {string} [description]
   * @return {Option}
   */

  default(value, description) {
    if (stryMutAct_9fa48("19")) {
      {}
    } else {
      stryCov_9fa48("19");
      this.defaultValue = value;
      this.defaultValueDescription = description;
      return this;
    }
  }

  /**
   * Preset to use when option used without option-argument, especially optional but also boolean and negated.
   * The custom processing (parseArg) is called.
   *
   * @example
   * new Option('--color').default('GREYSCALE').preset('RGB');
   * new Option('--donate [amount]').preset('20').argParser(parseFloat);
   *
   * @param {*} arg
   * @return {Option}
   */

  preset(arg) {
    if (stryMutAct_9fa48("20")) {
      {}
    } else {
      stryCov_9fa48("20");
      this.presetArg = arg;
      return this;
    }
  }

  /**
   * Add option name(s) that conflict with this option.
   * An error will be displayed if conflicting options are found during parsing.
   *
   * @example
   * new Option('--rgb').conflicts('cmyk');
   * new Option('--js').conflicts(['ts', 'jsx']);
   *
   * @param {(string | string[])} names
   * @return {Option}
   */

  conflicts(names) {
    if (stryMutAct_9fa48("21")) {
      {}
    } else {
      stryCov_9fa48("21");
      this.conflictsWith = this.conflictsWith.concat(names);
      return this;
    }
  }

  /**
   * Specify implied option values for when this option is set and the implied options are not.
   *
   * The custom processing (parseArg) is not called on the implied values.
   *
   * @example
   * program
   *   .addOption(new Option('--log', 'write logging information to file'))
   *   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
   *
   * @param {object} impliedOptionValues
   * @return {Option}
   */
  implies(impliedOptionValues) {
    if (stryMutAct_9fa48("22")) {
      {}
    } else {
      stryCov_9fa48("22");
      let newImplied = impliedOptionValues;
      if (stryMutAct_9fa48("25") ? typeof impliedOptionValues !== 'string' : stryMutAct_9fa48("24") ? false : stryMutAct_9fa48("23") ? true : (stryCov_9fa48("23", "24", "25"), typeof impliedOptionValues === (stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), 'string')))) {
        if (stryMutAct_9fa48("27")) {
          {}
        } else {
          stryCov_9fa48("27");
          // string is not documented, but easy mistake and we can do what user probably intended.
          newImplied = stryMutAct_9fa48("28") ? {} : (stryCov_9fa48("28"), {
            [impliedOptionValues]: stryMutAct_9fa48("29") ? false : (stryCov_9fa48("29"), true)
          });
        }
      }
      this.implied = Object.assign(stryMutAct_9fa48("32") ? this.implied && {} : stryMutAct_9fa48("31") ? false : stryMutAct_9fa48("30") ? true : (stryCov_9fa48("30", "31", "32"), this.implied || {}), newImplied);
      return this;
    }
  }

  /**
   * Set environment variable to check for option value.
   *
   * An environment variable is only used if when processed the current option value is
   * undefined, or the source of the current value is 'default' or 'config' or 'env'.
   *
   * @param {string} name
   * @return {Option}
   */

  env(name) {
    if (stryMutAct_9fa48("33")) {
      {}
    } else {
      stryCov_9fa48("33");
      this.envVar = name;
      return this;
    }
  }

  /**
   * Set the custom handler for processing CLI option arguments into option values.
   *
   * @param {Function} [fn]
   * @return {Option}
   */

  argParser(fn) {
    if (stryMutAct_9fa48("34")) {
      {}
    } else {
      stryCov_9fa48("34");
      this.parseArg = fn;
      return this;
    }
  }

  /**
   * Whether the option is mandatory and must have a value after parsing.
   *
   * @param {boolean} [mandatory=true]
   * @return {Option}
   */

  makeOptionMandatory(mandatory = stryMutAct_9fa48("35") ? false : (stryCov_9fa48("35"), true)) {
    if (stryMutAct_9fa48("36")) {
      {}
    } else {
      stryCov_9fa48("36");
      this.mandatory = stryMutAct_9fa48("37") ? !mandatory : (stryCov_9fa48("37"), !(stryMutAct_9fa48("38") ? mandatory : (stryCov_9fa48("38"), !mandatory)));
      return this;
    }
  }

  /**
   * Hide option in help.
   *
   * @param {boolean} [hide=true]
   * @return {Option}
   */

  hideHelp(hide = stryMutAct_9fa48("39") ? false : (stryCov_9fa48("39"), true)) {
    if (stryMutAct_9fa48("40")) {
      {}
    } else {
      stryCov_9fa48("40");
      this.hidden = stryMutAct_9fa48("41") ? !hide : (stryCov_9fa48("41"), !(stryMutAct_9fa48("42") ? hide : (stryCov_9fa48("42"), !hide)));
      return this;
    }
  }

  /**
   * @package
   */

  _collectValue(value, previous) {
    if (stryMutAct_9fa48("43")) {
      {}
    } else {
      stryCov_9fa48("43");
      if (stryMutAct_9fa48("46") ? previous === this.defaultValue && !Array.isArray(previous) : stryMutAct_9fa48("45") ? false : stryMutAct_9fa48("44") ? true : (stryCov_9fa48("44", "45", "46"), (stryMutAct_9fa48("48") ? previous !== this.defaultValue : stryMutAct_9fa48("47") ? false : (stryCov_9fa48("47", "48"), previous === this.defaultValue)) || (stryMutAct_9fa48("49") ? Array.isArray(previous) : (stryCov_9fa48("49"), !Array.isArray(previous))))) {
        if (stryMutAct_9fa48("50")) {
          {}
        } else {
          stryCov_9fa48("50");
          return stryMutAct_9fa48("51") ? [] : (stryCov_9fa48("51"), [value]);
        }
      }
      previous.push(value);
      return previous;
    }
  }

  /**
   * Only allow option value to be one of choices.
   *
   * @param {string[]} values
   * @return {Option}
   */

  choices(values) {
    if (stryMutAct_9fa48("52")) {
      {}
    } else {
      stryCov_9fa48("52");
      this.argChoices = stryMutAct_9fa48("53") ? values : (stryCov_9fa48("53"), values.slice());
      this.parseArg = (arg, previous) => {
        if (stryMutAct_9fa48("54")) {
          {}
        } else {
          stryCov_9fa48("54");
          if (stryMutAct_9fa48("57") ? false : stryMutAct_9fa48("56") ? true : stryMutAct_9fa48("55") ? this.argChoices.includes(arg) : (stryCov_9fa48("55", "56", "57"), !this.argChoices.includes(arg))) {
            if (stryMutAct_9fa48("58")) {
              {}
            } else {
              stryCov_9fa48("58");
              throw new InvalidArgumentError(stryMutAct_9fa48("59") ? `` : (stryCov_9fa48("59"), `Allowed choices are ${this.argChoices.join(stryMutAct_9fa48("60") ? "" : (stryCov_9fa48("60"), ', '))}.`));
            }
          }
          if (stryMutAct_9fa48("62") ? false : stryMutAct_9fa48("61") ? true : (stryCov_9fa48("61", "62"), this.variadic)) {
            if (stryMutAct_9fa48("63")) {
              {}
            } else {
              stryCov_9fa48("63");
              return this._collectValue(arg, previous);
            }
          }
          return arg;
        }
      };
      return this;
    }
  }

  /**
   * Return option name.
   *
   * @return {string}
   */

  name() {
    if (stryMutAct_9fa48("64")) {
      {}
    } else {
      stryCov_9fa48("64");
      if (stryMutAct_9fa48("66") ? false : stryMutAct_9fa48("65") ? true : (stryCov_9fa48("65", "66"), this.long)) {
        if (stryMutAct_9fa48("67")) {
          {}
        } else {
          stryCov_9fa48("67");
          return this.long.replace(stryMutAct_9fa48("68") ? /--/ : (stryCov_9fa48("68"), /^--/), stryMutAct_9fa48("69") ? "Stryker was here!" : (stryCov_9fa48("69"), ''));
        }
      }
      return this.short.replace(stryMutAct_9fa48("70") ? /-/ : (stryCov_9fa48("70"), /^-/), stryMutAct_9fa48("71") ? "Stryker was here!" : (stryCov_9fa48("71"), ''));
    }
  }

  /**
   * Return option name, in a camelcase format that can be used
   * as an object attribute key.
   *
   * @return {string}
   */

  attributeName() {
    if (stryMutAct_9fa48("72")) {
      {}
    } else {
      stryCov_9fa48("72");
      if (stryMutAct_9fa48("74") ? false : stryMutAct_9fa48("73") ? true : (stryCov_9fa48("73", "74"), this.negate)) {
        if (stryMutAct_9fa48("75")) {
          {}
        } else {
          stryCov_9fa48("75");
          return camelcase(this.name().replace(stryMutAct_9fa48("76") ? /no-/ : (stryCov_9fa48("76"), /^no-/), stryMutAct_9fa48("77") ? "Stryker was here!" : (stryCov_9fa48("77"), '')));
        }
      }
      return camelcase(this.name());
    }
  }

  /**
   * Set the help group heading.
   *
   * @param {string} heading
   * @return {Option}
   */
  helpGroup(heading) {
    if (stryMutAct_9fa48("78")) {
      {}
    } else {
      stryCov_9fa48("78");
      this.helpGroupHeading = heading;
      return this;
    }
  }

  /**
   * Check if `arg` matches the short or long flag.
   *
   * @param {string} arg
   * @return {boolean}
   * @package
   */

  is(arg) {
    if (stryMutAct_9fa48("79")) {
      {}
    } else {
      stryCov_9fa48("79");
      return stryMutAct_9fa48("82") ? this.short === arg && this.long === arg : stryMutAct_9fa48("81") ? false : stryMutAct_9fa48("80") ? true : (stryCov_9fa48("80", "81", "82"), (stryMutAct_9fa48("84") ? this.short !== arg : stryMutAct_9fa48("83") ? false : (stryCov_9fa48("83", "84"), this.short === arg)) || (stryMutAct_9fa48("86") ? this.long !== arg : stryMutAct_9fa48("85") ? false : (stryCov_9fa48("85", "86"), this.long === arg)));
    }
  }

  /**
   * Return whether a boolean option.
   *
   * Options are one of boolean, negated, required argument, or optional argument.
   *
   * @return {boolean}
   * @package
   */

  isBoolean() {
    if (stryMutAct_9fa48("87")) {
      {}
    } else {
      stryCov_9fa48("87");
      return stryMutAct_9fa48("90") ? !this.required && !this.optional || !this.negate : stryMutAct_9fa48("89") ? false : stryMutAct_9fa48("88") ? true : (stryCov_9fa48("88", "89", "90"), (stryMutAct_9fa48("92") ? !this.required || !this.optional : stryMutAct_9fa48("91") ? true : (stryCov_9fa48("91", "92"), (stryMutAct_9fa48("93") ? this.required : (stryCov_9fa48("93"), !this.required)) && (stryMutAct_9fa48("94") ? this.optional : (stryCov_9fa48("94"), !this.optional)))) && (stryMutAct_9fa48("95") ? this.negate : (stryCov_9fa48("95"), !this.negate)));
    }
  }
}

/**
 * This class is to make it easier to work with dual options, without changing the existing
 * implementation. We support separate dual options for separate positive and negative options,
 * like `--build` and `--no-build`, which share a single option value. This works nicely for some
 * use cases, but is tricky for others where we want separate behaviours despite
 * the single shared option value.
 */
class DualOptions {
  /**
   * @param {Option[]} options
   */
  constructor(options) {
    if (stryMutAct_9fa48("96")) {
      {}
    } else {
      stryCov_9fa48("96");
      this.positiveOptions = new Map();
      this.negativeOptions = new Map();
      this.dualOptions = new Set();
      options.forEach(option => {
        if (stryMutAct_9fa48("97")) {
          {}
        } else {
          stryCov_9fa48("97");
          if (stryMutAct_9fa48("99") ? false : stryMutAct_9fa48("98") ? true : (stryCov_9fa48("98", "99"), option.negate)) {
            if (stryMutAct_9fa48("100")) {
              {}
            } else {
              stryCov_9fa48("100");
              this.negativeOptions.set(option.attributeName(), option);
            }
          } else {
            if (stryMutAct_9fa48("101")) {
              {}
            } else {
              stryCov_9fa48("101");
              this.positiveOptions.set(option.attributeName(), option);
            }
          }
        }
      });
      this.negativeOptions.forEach((value, key) => {
        if (stryMutAct_9fa48("102")) {
          {}
        } else {
          stryCov_9fa48("102");
          if (stryMutAct_9fa48("104") ? false : stryMutAct_9fa48("103") ? true : (stryCov_9fa48("103", "104"), this.positiveOptions.has(key))) {
            if (stryMutAct_9fa48("105")) {
              {}
            } else {
              stryCov_9fa48("105");
              this.dualOptions.add(key);
            }
          }
        }
      });
    }
  }

  /**
   * Did the value come from the option, and not from possible matching dual option?
   *
   * @param {*} value
   * @param {Option} option
   * @returns {boolean}
   */
  valueFromOption(value, option) {
    if (stryMutAct_9fa48("106")) {
      {}
    } else {
      stryCov_9fa48("106");
      const optionKey = option.attributeName();
      if (stryMutAct_9fa48("109") ? false : stryMutAct_9fa48("108") ? true : stryMutAct_9fa48("107") ? this.dualOptions.has(optionKey) : (stryCov_9fa48("107", "108", "109"), !this.dualOptions.has(optionKey))) return stryMutAct_9fa48("110") ? false : (stryCov_9fa48("110"), true);

      // Use the value to deduce if (probably) came from the option.
      const preset = this.negativeOptions.get(optionKey).presetArg;
      const negativeValue = (stryMutAct_9fa48("113") ? preset === undefined : stryMutAct_9fa48("112") ? false : stryMutAct_9fa48("111") ? true : (stryCov_9fa48("111", "112", "113"), preset !== undefined)) ? preset : stryMutAct_9fa48("114") ? true : (stryCov_9fa48("114"), false);
      return stryMutAct_9fa48("117") ? option.negate !== (negativeValue === value) : stryMutAct_9fa48("116") ? false : stryMutAct_9fa48("115") ? true : (stryCov_9fa48("115", "116", "117"), option.negate === (stryMutAct_9fa48("120") ? negativeValue !== value : stryMutAct_9fa48("119") ? false : stryMutAct_9fa48("118") ? true : (stryCov_9fa48("118", "119", "120"), negativeValue === value)));
    }
  }
}

/**
 * Convert string from kebab-case to camelCase.
 *
 * @param {string} str
 * @return {string}
 * @private
 */

function camelcase(str) {
  if (stryMutAct_9fa48("121")) {
    {}
  } else {
    stryCov_9fa48("121");
    return str.split(stryMutAct_9fa48("122") ? "" : (stryCov_9fa48("122"), '-')).reduce((str, word) => {
      if (stryMutAct_9fa48("123")) {
        {}
      } else {
        stryCov_9fa48("123");
        return stryMutAct_9fa48("124") ? str + word[0].toUpperCase() - word.slice(1) : (stryCov_9fa48("124"), (stryMutAct_9fa48("125") ? str - word[0].toUpperCase() : (stryCov_9fa48("125"), str + (stryMutAct_9fa48("126") ? word[0].toLowerCase() : (stryCov_9fa48("126"), word[0].toUpperCase())))) + (stryMutAct_9fa48("127") ? word : (stryCov_9fa48("127"), word.slice(1))));
      }
    });
  }
}

/**
 * Split the short and long flag out of something like '-m,--mixed <value>'
 *
 * @private
 */

function splitOptionFlags(flags) {
  if (stryMutAct_9fa48("128")) {
    {}
  } else {
    stryCov_9fa48("128");
    let shortFlag;
    let longFlag;
    // short flag, single dash and single character
    const shortFlagExp = stryMutAct_9fa48("131") ? /^-[-]$/ : stryMutAct_9fa48("130") ? /^-[^-]/ : stryMutAct_9fa48("129") ? /-[^-]$/ : (stryCov_9fa48("129", "130", "131"), /^-[^-]$/);
    // long flag, double dash and at least one character
    const longFlagExp = stryMutAct_9fa48("133") ? /^--[-]/ : stryMutAct_9fa48("132") ? /--[^-]/ : (stryCov_9fa48("132", "133"), /^--[^-]/);
    const flagParts = flags.split(stryMutAct_9fa48("135") ? /[^ |,]+/ : stryMutAct_9fa48("134") ? /[ |,]/ : (stryCov_9fa48("134", "135"), /[ |,]+/)).concat(stryMutAct_9fa48("136") ? "" : (stryCov_9fa48("136"), 'guard'));
    // Normal is short and/or long.
    if (stryMutAct_9fa48("138") ? false : stryMutAct_9fa48("137") ? true : (stryCov_9fa48("137", "138"), shortFlagExp.test(flagParts[0]))) shortFlag = flagParts.shift();
    if (stryMutAct_9fa48("140") ? false : stryMutAct_9fa48("139") ? true : (stryCov_9fa48("139", "140"), longFlagExp.test(flagParts[0]))) longFlag = flagParts.shift();
    // Long then short. Rarely used but fine.
    if (stryMutAct_9fa48("143") ? !shortFlag || shortFlagExp.test(flagParts[0]) : stryMutAct_9fa48("142") ? false : stryMutAct_9fa48("141") ? true : (stryCov_9fa48("141", "142", "143"), (stryMutAct_9fa48("144") ? shortFlag : (stryCov_9fa48("144"), !shortFlag)) && shortFlagExp.test(flagParts[0]))) shortFlag = flagParts.shift();
    // Allow two long flags, like '--ws, --workspace'
    // This is the supported way to have a shortish option flag.
    if (stryMutAct_9fa48("147") ? !shortFlag || longFlagExp.test(flagParts[0]) : stryMutAct_9fa48("146") ? false : stryMutAct_9fa48("145") ? true : (stryCov_9fa48("145", "146", "147"), (stryMutAct_9fa48("148") ? shortFlag : (stryCov_9fa48("148"), !shortFlag)) && longFlagExp.test(flagParts[0]))) {
      if (stryMutAct_9fa48("149")) {
        {}
      } else {
        stryCov_9fa48("149");
        shortFlag = longFlag;
        longFlag = flagParts.shift();
      }
    }

    // Check for unprocessed flag. Fail noisily rather than silently ignore.
    if (stryMutAct_9fa48("152") ? flagParts[0].endsWith('-') : stryMutAct_9fa48("151") ? false : stryMutAct_9fa48("150") ? true : (stryCov_9fa48("150", "151", "152"), flagParts[0].startsWith(stryMutAct_9fa48("153") ? "" : (stryCov_9fa48("153"), '-')))) {
      if (stryMutAct_9fa48("154")) {
        {}
      } else {
        stryCov_9fa48("154");
        const unsupportedFlag = flagParts[0];
        const baseError = stryMutAct_9fa48("155") ? `` : (stryCov_9fa48("155"), `option creation failed due to '${unsupportedFlag}' in option flags '${flags}'`);
        if (stryMutAct_9fa48("157") ? false : stryMutAct_9fa48("156") ? true : (stryCov_9fa48("156", "157"), (stryMutAct_9fa48("160") ? /^-[^-][-]/ : stryMutAct_9fa48("159") ? /^-[-][^-]/ : stryMutAct_9fa48("158") ? /-[^-][^-]/ : (stryCov_9fa48("158", "159", "160"), /^-[^-][^-]/)).test(unsupportedFlag))) throw new Error(stryMutAct_9fa48("161") ? `` : (stryCov_9fa48("161"), `${baseError}
- a short flag is a single dash and a single character
  - either use a single dash and a single character (for a short flag)
  - or use a double dash for a long option (and can have two, like '--ws, --workspace')`));
        if (stryMutAct_9fa48("163") ? false : stryMutAct_9fa48("162") ? true : (stryCov_9fa48("162", "163"), shortFlagExp.test(unsupportedFlag))) throw new Error(stryMutAct_9fa48("164") ? `` : (stryCov_9fa48("164"), `${baseError}
- too many short flags`));
        if (stryMutAct_9fa48("166") ? false : stryMutAct_9fa48("165") ? true : (stryCov_9fa48("165", "166"), longFlagExp.test(unsupportedFlag))) throw new Error(stryMutAct_9fa48("167") ? `` : (stryCov_9fa48("167"), `${baseError}
- too many long flags`));
        throw new Error(stryMutAct_9fa48("168") ? `` : (stryCov_9fa48("168"), `${baseError}
- unrecognised flag format`));
      }
    }
    if (stryMutAct_9fa48("171") ? shortFlag === undefined || longFlag === undefined : stryMutAct_9fa48("170") ? false : stryMutAct_9fa48("169") ? true : (stryCov_9fa48("169", "170", "171"), (stryMutAct_9fa48("173") ? shortFlag !== undefined : stryMutAct_9fa48("172") ? true : (stryCov_9fa48("172", "173"), shortFlag === undefined)) && (stryMutAct_9fa48("175") ? longFlag !== undefined : stryMutAct_9fa48("174") ? true : (stryCov_9fa48("174", "175"), longFlag === undefined)))) throw new Error(stryMutAct_9fa48("176") ? `` : (stryCov_9fa48("176"), `option creation failed due to no flags found in '${flags}'.`));
    return stryMutAct_9fa48("177") ? {} : (stryCov_9fa48("177"), {
      shortFlag,
      longFlag
    });
  }
}
exports.Option = Option;
exports.DualOptions = DualOptions;