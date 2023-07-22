export const statementSchema = {
  text: {
    errorMessage: "There should be a statement!",
    isLength: {
      options: {
        min: 1,
      },
    },
  },
  playerName: {
    errorMessage: "There should be a player name!",
    isLength: {
      options: {
        min: 1,
      },
    },
  },
};
