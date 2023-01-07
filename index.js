function f()
{
    let expr = document.getElementById('input').value;
    let op = document.getElementById('o');

    console.log(expr);

    function areBracketsBalanced(expr)
{
    let stack = [];
     // Traversing the Expression
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
  
        if (x == '(' || x == '[' || x == '{')
        {
              
            // Push the element in the stack
            stack.push(x);
            continue;
        }
        
        // If current character is not opening
        // bracket, then it must be closing. 
        // So stack cannot be empty at this point.
        if (stack.length == 0)
            return false;
              
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
  
    // Check Empty Stack
    return (stack.length == 0);
}
  
// Driver code
// let expr = "([{}])";
 

// Function call

    if (areBracketsBalanced(expr))
    op.innerHTML = "String is Balanced"
    // document.write("Balanced ");

    // else if(areBracketsBalanced(expr) == 2)
    // op.innerHTML = "A-Z character is not allow"
    
    // document.write("Not Balanced ");
    else
    op.innerHTML = "String is Not Balanced"

   
}