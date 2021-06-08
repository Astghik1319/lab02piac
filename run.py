from flask import Flask
from flask import render_template
from flask import request
from flask import abort, send_from_directory
from AzureDB import AzureDB
from datetime import datetime
import os
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/gallery')
def gallery():
    return render_template('gallery.html')


@app.route('/aboutme')
def aboutme():
    return render_template('aboutme.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/guestbook')
def guestbook():
    with AzureDB() as a:
        data = a.azureGetData()
        return render_template("guestbook.html", data=data, title='GuestBook')


@app.route('/addcomment')
def addcomment():
    return render_template("addcomment.html", title='Add Comment')


@app.route('/thankyou', methods=['POST'])
def thankyou():
    if request.method == 'POST':
        name = request.form['name']
        comment = request.form['comment']
        date = str(datetime.now())
        with AzureDB() as a:
            a.azureAddData(name, comment, date[:19])
    return render_template('thankyou.html', title='Dziękuje', metod='POST')


@app.route('/delete', methods=['GET', 'POST'])
def delete():
    index = request.form['id']
    with AzureDB() as a:
        a.azureDeleteData(index)
        return render_template('thankyou.html', title='Dziękuje', metod='DELETE')


@app.route('/edit', methods=['POST', 'GET'])
def edit():
    index = request.form['id']
    with AzureDB() as a:
        data = a.azureGetOneData(index)
        return render_template('editcomment.html', title='Edytowanie', nick=data[1], comment=data[2], id=data[0])


@app.route('/update', methods=['POST', 'GET'])
def update():
    index = request.form['id']
    name = request.form['name']
    text = request.form['text']
    with AzureDB() as a:
        a.azureUpdateData(index, name, text)
        return render_template('thankyou.html', title='Dziękuje', metod='UPDATE')



@app.route('/error_denied')
def error_denied():
    abort(401)


if __name__ == '__main__':
    app.run(debug=True)
