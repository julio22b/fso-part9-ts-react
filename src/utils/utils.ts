const assertNever = (val: never): never => {
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(val)}`);
};

export default {
    assertNever,
};
