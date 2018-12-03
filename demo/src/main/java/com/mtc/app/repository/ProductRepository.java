package com.mtc.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.mtc.app.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

}
