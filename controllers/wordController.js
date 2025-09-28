export const showCheckWordsForm = (req, res) => {
  res.render("checkWordsForm", { input1: "", input2: "" });
};

export const checkWords = (req, res) => {
  const { input1, input2, type } = req.body;

  if (!input1 || !input2 || !type) {
    return res.render("checkWordsForm", {
      input1,
      input2,
      type,
      result: { matchCount: 0, totalChars: 0, percentage: 0 },
      error: "Please provide input1, input2, and type"
    });
  }

  let matchCount = 0;
  let totalChars = input1.length;
  console.log("Total characters in input1:", totalChars);

  // Nested loop + break untuk hindari double count
  for (let i = 0; i 
    < input1.length; i++) {
    const char1 = input1[i];

    for (let j = 0; j < input2.length; j++) {
      const char2 = input2[j];

      if (type === "non-sensitive") {
        if (char1.toLowerCase() === char2.toLowerCase()) {
          matchCount++;
          break;
        }
      } else if (type === "sensitive") {
        if (char1 === char2) {
          matchCount++;
          break;
        }
      }
    }
  }

  const percentage = ((matchCount / totalChars) * 100).toFixed(2);

  res.render("checkWordsForm", {
    input1,
    input2,
    type,
    result: { matchCount, totalChars, percentage }
  });
};
