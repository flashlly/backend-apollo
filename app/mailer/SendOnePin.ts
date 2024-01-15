import nodemailer from 'nodemailer';

export const SendPin = (wallets: any, email: any, resolve: any) => {
  const mailEmetteur = 'no-reply@flashlly.com';
  const MDP = process.env.MDP;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: mailEmetteur,
      pass: MDP,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOptions = {
    from: mailEmetteur,
    to: email,
    subject: 'Flashlly: 💳Vos Wallets et identifiants secrets💳',
    html: `
        <html lang="fr">
        <head>
          <meta charset="UTF-8" />
          <title>confirm</title>
        </head>
        <body
          style="
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
              Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
          "
        >
          <div style="background-color: #f5f5f5; border-radius: 20px; border: none">
            <div style="text-align: center; padding: 30px">
              <a
                style="
                  color: #3570bc;
                  display: inline-block;
                  font-family: Graphik, Arial, sans-serif;
                  font-weight: 400;
                  line-height: 130%;
                  padding: 0;
                  text-align: center;
                  background-color: none;
                "
                ses:no-track=""
                href="https://flashlly.com"
              >
                <img
                  class="atm-logo"
                  alt="flashlly logo"
                  style="
                    -ms-interpolation-mode: bicubic;
                    clear: both;
                    display: block;
                    outline: 0;
                    text-decoration: none;"
                  src="https://www.flashlly.com/_next/static/media/logo-dark.e7576dbd.png"
                  width="143"
                />
              </a>
            </div>
            <div
              style="
                width: 51vh;
                margin: auto;
                background-image: linear-gradient(to bottom, #fec5c8, #6e40c9);
                border-radius: 20px;
                padding: 5px 0px 5px 0px;
              "
            >
              <div
                style="
                  width: 50vh;
                  margin: auto;
                  background-color: white;
                  border-radius: 20px;
                "
              >
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td colspan="2" align="center" style="padding: 20px">
                          <h1 style="font-size: 1.5rem; margin: 0">
                            Bienvenue 👋
                            ,
                          </h1>
                          <br />
                          <p style="font-size: 14px; padding: 10px; margin-top: 0">
                            🎉 Nouveaux wallets et codes PIN sécurisés ! 💼 Plus de
                            sécurité, plus de confiance ! 🔒💳 Bienvenue chez <strong>FLASHLLY</strong> 
                            !. 
                            Nous sommes ravis de vous
                            annoncer la création de votre nouveau wallet et code
                            PIN. Profitez d'une expérience améliorée et protégez vos
                            transactions en toute simplicité. 💪💰
                            <br />
                          </p>

                          <table
                            style="
                              width: 90%;
                              margin: auto;
                              border: 0px rgb(192, 192, 192) solid;
                              border-radius: 8px;
                              padding: 0;
                            "
                          >
                          <tbody>

                            <tr>
                              <td
                                style="
                                  border: 0px rgb(192, 192, 192) solid;
                                  display: flex;
                                  justify-content: space-evenly;
                                  align-items: center;
                                  padding: 5px;
                                "
                                >

                                <div>
                                  <div style="font-weight: 500">wallet</div>
                                </div>
             
                              </td>

                              <td
                                style="
                                  text-align: right;
                                  font-weight: 700;
                                  border: 0px rgb(192, 192, 192) solid;
                                  color: transparent;
                                "
                              >
                                center
                              </td>
                              <td
                                style="
                                  text-align: right;
                                  font-weight: 700;
                                  border-bottom: 0px rgb(192, 192, 192) solid;
                                "
                              >
                                pincode
                              </td>
                            </tr>

                          </tbody>
                        </table>

                          <table
                            style="
                              width: 90%;
                              margin: auto;
                              border: 1px rgb(192, 192, 192) solid;
                              border-radius: 8px;
                              padding: 0;
                            "
                          >
                            <tbody>

                              <tr>
                                <td
                                  style="
                                    border-bottom: 1px rgb(192, 192, 192) solid;
                                    border-right: 1px rgb(192, 192, 192) solid;
                                    display: flex;
                                    justify-content: space-evenly;
                                    align-items: center;
                                    padding: 5px;
                                  "
                                >
                                  <img
                                  style="height: 40px; padding: 0 7px"
                                  src="https://landing.fra1.cdn.digitaloceanspaces.com/jpg/${
                                    wallets[0]?.type
                                  }.jpg"
                                  alt="${wallets[0]?.type}"
                                />

                                  <div>
                                    <div style="font-weight: 500">${
                                      wallets[0]?.walletAddress?.slice(0, 4) +
                                      '...' +
                                      wallets[0]?.walletAddress?.slice(-4)
                                    }</div>
                                    <div style="font-size: small">${
                                      wallets[0]?.type
                                    }</div>
                                  </div>
                                  

                                </td>

                                <td
                                  style="
                                    text-align: center;
                                    font-weight: 700;
                                    border-bottom: 1px rgb(192, 192, 192) solid;
                                  "
                                >
                                  ${wallets[0]?.pincode}
                                </td>
                              </tr>

                            </tbody>
                          </table>
                          <p style="font-size: 14px; padding-top: 30px">
                            <strong
                              >Nous tenons à rappeler l'importance de garder votre
                              code PIN confidentiel. Ne le partagez avec personne,
                              même avec notre équipe. Votre sécurité est notre
                              priorité absolue.</strong
                            >
      
                            <br />
                          </p>
      
                          <p style="font-size: 14px; margin: 0; padding: 0">
                            Cordialement,
                            <br />
                          </p>
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td colspan="2" align="center">
                          <p style="font-size: 14px">
                            Team Flashlly<br />
                            <a href="www.flashlly.com">www.flashlly.com</a> <br />
                            PS: Ceci est un message automatique, merci de ne pas y
                            répondre directement.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <table align="center">
              <tbody>
                <tr>
                  <td
                    style="
                      border: none;
                      color: grey;
                      font-size: 14px;
                      padding-top: 20px;
                      text-align: center;
                    "
                  >
                    Flashlly 2023
                    <br />
                    22B Bartycka Street
                    <br />
                    00-716 Warsaw, Poland
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </body>
      </html>
                `,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      resolve('mail foiree', null);
      return;
    } else {
      resolve(null, 'mail envoyEE');
      return;
    }
  });
};
