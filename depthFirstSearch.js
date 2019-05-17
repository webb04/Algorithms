function depthFirstSearch(tree, value) {
    var stack = []
    
    stack.push(tree[0])
    
    while (stack.length !== 0) {
        for (let i = 0; i < stack.length; i++) {
            var node = stack.pop()
            
            if (node.value === value) {
                return node
            }
            if (node.right) {
                stack.push(tree[node.right])
            }
            if (node.left) {
                stack.push(tree[node.left])
            }
        }
    }
    return null;
}

let tree = [
    {value: 6, left: 1, right: 2},
    {value: 5, left: 3, right: 4},
    {value: 7, left: null, right: 5},
    {value: 3, left: 6, right: null},
    {value: 4, left: null, right: null},
    {value: 9, left: 7, right: 8},
    {value: 2, left: 9, right: null},
    {value: 8, left: null, right: null},
    {value: 10, left: null, right: null},
    {value: 1, left: null, right: null}
];