module.exports = {
  provider: 'linkedin',
  password: process.env.AUTH_PASSWORD,
  isSecure: false,
  clientId: process.env.LINKEDIN_ID,
  clientSecret: process.env.LINKEDIN_SECRET,
  providerParams: {
    redirect_uri: `${process.env.URL}/auth/linkedin`
  }
};
