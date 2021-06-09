from flask import Flask, render_template, request
from AzureDB import AzureDB
app = Flask(__name__)
@app.route('/')
def hello():
 with AzureDB() as a:
 data = a.azureGetData()
 return render_template("result.html", data = data)
 
if __name__ == '__main__':
 app.run(debug=True)



app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'yourId@gmail.com'
app.config['MAIL_PASSWORD'] = '*****'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route("/")
def index():
   msg = Message('Hello', sender = 'yourId@gmail.com', recipients = ['someone1@gmail.com'])
   msg.body = "Hello Flask message sent from Flask-Mail"
   mail.send(msg)
   return "Sent"

if __name__ == '__main__':
   app.run(debug = True)
   
   @app.route('/')
def hello():
 with AzureDB() as a:
 data = a.azureGetData()
 return render_template("result.html", data = data)
 
if __name__ == '__main__':
 app.run(debug=True)


config = {
  'host':'<piac02anna>.mysql.database.azure.com',
  'user':'<lab02>@<mydemoserver>',
  'password':'<piac02Anna>',
  'database':'<piac02>',
  'client_flags': [mysql.connector.ClientFlag.SSL],
  'ssl_ca': '/var/wwww/html/DigiCertGlobalRootG2.crt.pem'
}

# Construct connection string
try:
   conn = mysql.connector.connect(**config)
   print("Connection established")
except mysql.connector.Error as err:
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Something is wrong with the user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist")
  else:
    print(err)
else:
  cursor = conn.cursor()
