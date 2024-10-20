from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock database or data source
volunteer_opportunities = [
    {"location": "New York", "experience": "Young children", "categories": ["Helping children", "Healthcare"]},
    {"location": "Los Angeles", "experience": "Teens", "categories": ["Climate Change"]},
    {"location": "Chicago", "experience": "Adults with certain qualifications", "categories": ["Healthcare"]},
]

@app.route('/search', methods=['GET'])
def search_opportunities():
    location = request.args.get('location', '')
    experience = request.args.get('experience', '')
    categories = request.args.getlist('categories')  # Flask's way of handling repeated query params

    # Filter the volunteer opportunities based on the query parameters
    filtered_opportunities = [opp for opp in volunteer_opportunities
                              if (location.lower() in opp['location'].lower() or not location) and
                                 (experience == opp['experience'] or not experience) and
                                 (set(categories).intersection(opp['categories']) or not categories)]

    return jsonify(filtered_opportunities)

if __name__ == '__main__':
    app.run(debug=True)
