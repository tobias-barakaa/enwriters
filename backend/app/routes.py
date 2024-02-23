from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Home')

@app.route('/our_services')
def our_services():
    return render_template('our_services.html', title='Our Services')

@app.route('/get_started')
def get_started():
    return render_template('get_started.html', title='Get Started')

@app.route('/sample_articles')
def sample_articles():
    return render_template('sample_articles.html', title='Sample Articles')

@app.route('/contact_us')
def contact_us():
    return render_template('contact_us.html', title='Contact Us')

@app.route('/footer')
def footer():
    return render_template('footer.html', title='Footer')