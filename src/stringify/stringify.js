const stringify = (numbers) => {
    let str = numbers.toString();
    let removeComa = str.split(',');
    let merge = removeComa.reduce((acc, val) => acc + val)
    return merge;
}

export default stringify;