package pl.dstronczak.cloudcalculator;


import com.udojava.evalex.Expression;

import java.math.BigDecimal;


public class Evaluator {

    public static Double evaluateMathExpression(String expression) throws IncorrectQueryException {
        try {
            BigDecimal result = null;

            Expression e = new Expression(expression);
            result = e.eval();
            return result.doubleValue();
        } catch (Expression.ExpressionException e) {
            throw new IncorrectQueryException(e);
        }
    }
}
