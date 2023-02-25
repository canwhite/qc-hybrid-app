/* eslint-disable no-useless-escape */
export function parseJsonStringToObject(jsonString)
{
    const obj = {};
    const keyValuePairs = jsonString
      .substring(1, jsonString.length - 1)
      .split(',');
    keyValuePairs.forEach((keyValuePair) => {
      const [key, value] = keyValuePair.split(':');
      if (key && value) {
        obj[key.replace(/\"/g, '').trim()] = value.replace(/\"/g, '').trim();
      }
    });
    return obj;
  }