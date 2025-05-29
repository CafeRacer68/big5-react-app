import { google } from "googleapis";
import fs from "fs";

const SCOPES = ["https://www.googleapis.com/auth/firebase.messaging"];

const serviceAccount = {
  type: "service_account",
  project_id: "big-5-app",
  private_key_id: "d8918a1ff983f63e43eb7806939f1ff252a10c02",
  private_key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9xX49MfStoQNK
... [rest of your key, line breaks preserved] ...
-----END PRIVATE KEY-----`,
  client_email: "firebase-adminsdk-fbsvc@big-5-app.iam.gserviceaccount.com",
  token_uri: "https://oauth2.googleapis.com/token",
};

const jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  SCOPES,
  null,
);

jwtClient.authorize((err, tokens) => {
  if (err) {
    console.error("❌ Error creating access token:", err);
    return;
  }
  console.log("✅ ACCESS TOKEN:\n", tokens.access_token);
});
