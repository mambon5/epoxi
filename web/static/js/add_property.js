/**
 *  Adds "key" property as a property to each object in the array, the values
 *  are in props (properties)
 * @param {type} props - Property values to be matched
 * @param {type} array - array of objects
 * @param {type} key - key where to add the value in "props" for each object in the "array"
 * @returns {nothing|none}
 */
function add_props_arr(props, array, key) {
    if(props.length != array.length) {
        console.log("error: mismatching lengths in props and array")
        return "error"
    }
    for(let i=0; i < props.length; i++) {
        array[i][key] = props[i]
    }
    return
}
