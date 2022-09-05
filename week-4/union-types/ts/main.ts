type newType = string | number | boolean;
const val = true;

function doX(val: newType): newType {
    return val == 8;
}

doX(val);