module.exports = {
  apps: [
    {
      name: "quirkable.io-nextjs",
      script: "npm",
      args: "run start",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
