package com.poletto.dpoletto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poletto.dpoletto.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
