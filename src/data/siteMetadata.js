const siteMetadata = {
  newsletter: {
    provider: "emailOctopus",
    emailOctopusConfig: {
      apiKey: process.env.EMAIL_OCTOPUS_API_KEY,
      listId: process.env.EMAIL_OCTOPUS_LIST_ID,
    },
  },
};

module.exports = siteMetadata;
