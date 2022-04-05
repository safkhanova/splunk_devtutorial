#!/usr/bin/env python

import sys
import os
import time
import json

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "lib"))
from splunklib.searchcommands import \
    dispatch, GeneratingCommand, Configuration, Option, validators

with open("movies.json") as filmsfile:
    films=json.loads(filmsfile.read())

@Configuration()
class MyCommand(GeneratingCommand):

    count = Option(require=True, validate=validators.Integer(1,146))
    def generate(self):
        for movie_id in range(0, self.count):
            movie=films["movies"][movie_id]
            actors=movie["actors"].split(",")
            stripped_actors = [s.strip() for s in actors]
            directors=movie["director"].split(",")
            stripped_directors = [s.strip() for s in directors]

            yield {"_raw":f'{movie["title"]}\n{movie["year"]}',
                   "_time": time.time(),
                   "movie_id":movie_id+1,
                   "director": stripped_directors,
                   "actors": stripped_actors,
                   "year": movie["year"],
                   "genres": movie["genres"],
                   "all": movie}

dispatch (MyCommand, sys.argv, sys.stdin, sys.stdout, __name__)
