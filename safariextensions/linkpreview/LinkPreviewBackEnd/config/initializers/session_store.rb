# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_LinkPreviewBackEnd_session',
  :secret      => '89cdf56a2d91afc47bff53806596ac1c79036a6b16120e22eb66ce5c680a86f812ce05cff34093bcce608016832822fb8e31bea837073475e8ebce7b2c7c7f85'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
