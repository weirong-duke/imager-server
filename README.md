# Imager Server

I am trying to keep the README as sparse as possible; please refer to the provided notes for a more detailed outline of design and decision-making.

## Additional Notes

Additional notes (please read!) can be found [here](https://drive.google.com/file/d/1BI2pgPGkHRQ16z_uDO07hZyBkwNmLdlv/view?usp=sharing)


## Node Version

Please note that the Node version used to build this was 16.13.2 (also stated in .nvmrc).

Also, I used yarn and not npm (although both should work fine).

## Bootstrapping

Setup will require extra steps to make sure Prisma (ORM) is built and running correctly.

### `yarn`

This will install dependencies.

### `yarn bootstrap`

This will generate a prisma schema and create the local database that the server will utilize to store images.

### `yarn start`

Runs the server on nodemon on port 5000
