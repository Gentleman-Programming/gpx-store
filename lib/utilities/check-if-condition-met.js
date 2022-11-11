/**
 * @desc checks if the condition is met and returns its value
 * @param condition - the condition to check
 * @param errorMessage - the error message to be shown if the condition is not met
 * @return any
 */
export function checkIfConditionMet(condition, errorMessage) {
    const conditionMet = condition();
    if (!conditionMet.met) {
        console.error(errorMessage);
        throw Error(errorMessage);
    }
    return conditionMet.value;
}
