# Using the HelloFresh API

**This is part of a bonus point, no need to use it for the basic exercise.**

First thing you need to do is fetch a token. You can do this by sending an HTTP POST request to our gateway, like so:

```sh
$ curl -XPOST -H "Content-Type: application/json" -d '{ "client_id": "hellofresh-dev-test", "client_secret": "g4c25EzG4#%Afeh07Bb#anbH5BQQ67bJ7!G6QZOA", "grant_type": "client_credentials", "scope": "public" }' "https://gw.hellofresh.com/auth/token"
```

You can integrate this request in your own application and request it through the server.

## Fetch the recipes

You can get a list of recipes through our recipe search endpoint. This works like following:

```sh
$ curl -XGET -H "Authorization: Bearer {access_token}" "https://gw.hellofresh.com/api/recipes/search?country=us&locale=en-US&limit=9&cuisine=italian&order=-rating"
```

There's two parameters here:

- _Cuisine_; these are all kinds of cuisines to see the possible values you can run the following command:

```sh
$ curl -XGET -H "Authorization: Bearer {access_token}" "https://gw.hellofresh.com/api/cuisines?country=us&locale=en-US&take=all"
```

- _Order_; the following values are possible here: `calories; -calories; favorites; -favorites; date; -date; rating; -rating; time; -time; name; -name;`.

Now simply use these recipes instead of the `recipes.json` file. Have fun!
