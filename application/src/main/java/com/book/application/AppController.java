package com.book.application;

import com.book.application.entity.Books;
import com.book.application.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Controller
public class AppController {

    @Autowired
    BooksService booksService;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody ArrayList<Books> getData() {
        ArrayList<Books> listBooks = new ArrayList<>();

        List<Books> list = booksService.getList();
        listBooks.addAll(list);

        return listBooks;
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public @ResponseBody Object setData(@RequestBody Map<String, Object> data) {
        Books books = new Books();

        books.setTitle(data.get("title").toString());
        books.setAuthor(data.get("author").toString());
        books.setLang(data.get("lang").toString());
        books.setPublisher(data.get("publisher").toString());
        books.setIsbn(data.get("isbn").toString());

        return booksService.addBooks(books);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public @ResponseBody void delete(@PathVariable("id") Long id) {
        booksService.delete(id);
    }
}
