// Definition for a binary tree node.
function TreeNode(val) {
     this.val = val;
     this.right = this.left = null;
 }
 
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    // console.log(root)
    if(root==null){
        return null
    }
    let leftDep=depth(root.left)
    let rightDep=depth(root.right)
    if(leftDep===rightDep){
        return root
    }else if(leftDep>rightDep){
        return lcaDeepestLeaves(root.left)
    }else{
        return lcaDeepestLeaves(root.right)
    }
};

//求二叉树最大深度
function depth(root){
    if(root==null){
        return 0
    }
    let leftDep=depth(root.left)
    let rightDep=depth(root.right)
    return 1+Math.max(leftDep,rightDep)
}

//按层次建立二叉树
function initBinaryTree(arr){
    let root=new TreeNode(arr[0])
    let tree=root
    let cur=1,i=0,res=[]
    res.push(root)
    // root=new TreeNode(arr[1])
    // console.log(root,tree)//tree没有因为root改变而改变
    while(cur<arr.length){
        root=res.shift()
        root.left=new TreeNode(arr[cur++])
        if(cur===arr.length){
            break
        }
        root.right=new TreeNode(arr[cur++])
        res.push(root.left,root.right)
    }
    return tree
}
var T=initBinaryTree([1,2,3,4])
// console.log(T)
var rt=lcaDeepestLeaves(T)
console.log(rt)