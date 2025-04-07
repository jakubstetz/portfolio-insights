"""
This file implements all of the functionality in order to manage stock price alerts through interaction with the PostgreSQL database.
"""

import database

def get(id):
  """
  Get stock price alert by id.
  """
  with database.connection.cursor() as cur:
    cur.execute('SELECT * FROM alerts WHERE alert_id = %s;', (id,))
    return cur.fetchone()

def create(id, ticker, price, direction, one_time, expiration_date):
  """
  Create a new stock price alert.
  Parameters:
    - id: Generally unnecessary because it is autogenerated in the table via SERIAL. Parameter is left in the function definition in case we wish to overwrite the auto-generated id.
  """
  with database.connection.cursor() as cur:
    cur.execute('''
                INSERT INTO alerts (ticker, price, direction, one_time, creation_date, expiration_date)
                VALUES ('SPXL', 225.00, 'below', true, NOW(), NOW() + INTERVAL '7 days');
                ''')

def delete(id):
  """
  Delete a stock price alert by id.
  """

def update(id):
  """
  Update a stock price alert by id.
  """