function defeat(answer, expectedAnswer, name) {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`,
  );
}

export default defeat;
