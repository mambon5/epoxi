from flask import Flask, render_template, redirect, url_for, request
from flask_bootstrap import Bootstrap5 # you have to install "pip3 install bootstrap-flask, not flask-boostrap which is outdated"

from flask_wtf import FlaskForm, CSRFProtect
from wtforms import StringField, SubmitField, EmailField, IntegerField, Label
from wtforms.validators import DataRequired, Length, Email, InputRequired, NumberRange

import json

# Opening JSON file
f = open('static/language/text.json')
 
# returns JSON object as 
# a dictionary
text = json.load(f)
lang = "cat"
# Closing file
f.close()

# from modules import get_names, get_actor, get_id

app = Flask(__name__, static_url_path="/static")
app.secret_key = 'tO$&!|0wkamvVia0?n$NqIRVWOG'

# Bootstrap-Flask requires this line
bootstrap = Bootstrap5(app)
# Flask-WTF requires this line
csrf = CSRFProtect(app)




# with Flask-WTF, each web form is represented by a class
# "NameForm" can change; "(FlaskForm)" cannot
# see the route for "/" and "index.html" to see how this is used
class NameForm(FlaskForm):
    # posant els paràmetres del formulari
    name = StringField("", 
                        validators=[DataRequired(), Length(3, 40)])
    email = EmailField("", 
                    validators=[DataRequired(), Email()])
    phone = IntegerField("", 
                       [InputRequired(),
                       NumberRange(min=0, max=1000000000000, 
                                   message=text[lang]["contact"]["contact_form"]["error_import"]) ])
    descripcio = StringField("", 
                            validators=[DataRequired(), Length(3, 400)])
    pressupost = IntegerField("", 
                            [ InputRequired(),
        NumberRange(min=0, max=100000, message=text[lang]["contact"]["contact_form"]["error_import"]) ])
    submit = SubmitField("")

    def __init__(self, lang, *args, **kwargs):
        # actualitzant etiquetes del formulari segons l'idioma
        super().__init__(**kwargs)
        self['name'].label = Label(self['name'].id, text[lang]["contact"]["contact_form"]["nom"])
        self['email'].label = Label(self['email'].id, text[lang]["contact"]["contact_form"]["email"])
        self['phone'].label = Label(self['phone'].id, text[lang]["contact"]["contact_form"]["phone"])
        self['descripcio'].label = Label(self['descripcio'].id, text[lang]["contact"]["contact_form"]["descripcio"])
        self['pressupost'].label = Label(self['pressupost'].id, text[lang]["contact"]["contact_form"]["pressupost"])
        self['submit'].label = Label(self['submit'].id, text[lang]["contact"]["contact_form"]["submit_text"])
        # self['pressupost'].message = text[lang]["contact_form"]["error_import"]

    def validate_phone(form, field):
        if len(field.data) > 16:
            raise ValidationError('Número de telèfon invalid.')
        try:
            input_number = phonenumbers.parse(field.data)
            if not (phonenumbers.is_valid_number(input_number)):
                raise ValidationError('Número de telèfon invalid.')
        except:
            input_number = phonenumbers.parse("+1"+field.data)
            if not (phonenumbers.is_valid_number(input_number)):
                raise ValidationError('Número de telèfon invalid.')

# all Flask routes below

@app.route('/', methods=['GET', 'POST'])
def index():
    lang = request.args.get('lang')
    if not isinstance(lang, str):
        lang="cat"
    print("llengua triada: "+lang)
    
    
    # names = get_names(ACTORS)
    # you must tell the variable 'form' what you named the class, above
    # 'form' is the variable name used in this template: index.html
    form = NameForm(lang)
    # form.name.label = "adeu"
    message = ""
    # if form.validate_on_submit():
    #     name = form.name.data
    #     if name.lower() in names:
    #         # empty the form field
    #         form.name.data = ""
    #         id = get_id(ACTORS, name)
    #         # redirect the browser to another route and template
    #         return redirect( url_for('actor', id=id) )
    #     else:
    #         message = "That actor is not in our database."
    return render_template('index.html', 
                           text = text[lang],
                           titol=text[lang]["ind_templ"]['titol'],
                           form=form,
                           message=text[lang]["ind_templ"]['lead']
)

@app.route('/actor/<id>')
def actor(id):
    # run function to get actor data based on the id in the path
    id, name, photo = get_actor(ACTORS, id)
    if name == "Unknown":
        # redirect the browser to the error template
        return render_template('404.html'), 404
    else:
        # pass all the data for the selected actor to the template
        return render_template('actor.html', id=id, name=name, photo=photo)

# 2 routes to handle errors - they have templates too

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500


# keep this as is
if __name__ == '__main__':
    app.run(debug=True)