package com.book.application.service;

import com.book.application.entity.Books;
import com.book.application.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BooksService {

    @Autowired
    private final BooksRepository booksRepository;

    public BooksService(BooksRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    public List<Books> getList() {
        return booksRepository.findAll();
    }

    public Books addBooks(Books books) {
        return booksRepository.save(books);
    }

    public void delete(long id) {
        booksRepository.deleteById(id);
    }
}
