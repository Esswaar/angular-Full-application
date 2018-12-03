package com.mtc.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mtc.app.model.Product;
import com.mtc.app.repository.ProductRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class ProductController {
	
	@Autowired
	ProductRepository productRepository;

	public ProductController(ProductRepository productRepository) {
		super();
		this.productRepository = productRepository;
	}
	
	@RequestMapping(value="/products", method= RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
	@ResponseBody
	public ResponseEntity<List<Product>> getAll(){
		return new ResponseEntity<List<Product>>(productRepository.findAll(), HttpStatus.OK) ;
		
	}
	
	@GetMapping("/products/{id}")
	@ResponseBody
	public Optional<Product> findById(@PathVariable("id") int id){
		return productRepository.findById(id);
		
	}
	
	@PostMapping("/products")
	public Product saveProduct(@RequestBody Product product) {
		productRepository.save(product);
		return product;
	}
	
	@DeleteMapping("/products/{id}")
	public void deleteProduct(@PathVariable("id") int id) {
		productRepository.deleteById(id);
		
	}
	
	@PutMapping("/products")
	public void updateProduct(@RequestBody Product product) {
		productRepository.save(product);
	}
}
