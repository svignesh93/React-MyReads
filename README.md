# MyReads Project

MyReads is a React based project that allows users to search books and categorize to their `currently reading list`, `want to read` and `read` sections.

<br />

<p align="center">
    <img src="https://github.com/svignesh93/React-MyReads/blob/main/my_reads_flow.gif" alt="App Icon" width="80%" />
</p>

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Getting Started

1) To run this application, please fork the repository and clone it in your local machine.

2) After cloning the repository in your local machine, please switch to the root directory of this project in your terminal and install the required dependencies:

```
project_root_dir $ npm install
```

3) After installing the required dependencies, please run the application by running the below command:

```
project_root_dir $ npm start
```

4) After running the command, the terminal would launch the application on the browser in ```http://localhost:3000/``` url and any subsequent changes made in the code will be automatically reflected on the running site.

## Backend Server

A backend server support is provided and it can be accessed with the provided file [`BooksAPI.js`](src/api/BooksAPI.js) that contains the methods that performs the necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## License

[License](LICENSE.md)
