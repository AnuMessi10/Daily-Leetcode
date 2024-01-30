type TOperator = '+' | '-' | '*' | '/';

function evaluator(operator: TOperator, a: number, b: number): number {
    switch (operator) {
        case '+':
            return a + b;

        case '-':
            return a - b;

        case "*":
            return a * b;

        case "/":
            return a / b | 0;
    }
}

function isOperator(operator: string): boolean {
    return operator === '*' || operator === '-' || operator === '+' || operator === '/';
}

function evalRPN(tokens: string[]): number {
    let s: number[] = [];
    for (const token of tokens) {
        if (isOperator(token)) {
            const b = s.pop(), a = s.pop();
            const ans = evaluator(token as TOperator, a, b);
            s.push(ans);
        } else 
            s.push(Number(token));
    }
    return s.pop();
};