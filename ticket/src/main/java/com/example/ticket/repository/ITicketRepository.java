package com.example.ticket.repository;


import com.example.ticket.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ITicketRepository extends JpaRepository<Ticket, Integer> {
    @Modifying
    @Query(value = "update ticket set den=:den,di=:di,gia=:gia,gio=:gio,ngay=:ngay," +
            "soluong=:soluong,id_car=:id_car where id=:id", nativeQuery = true)
    void editTicket(@Param("den") String den, @Param("di") String di, @Param("gia") Double gia, @Param("gio") String gio
            , @Param("ngay") String ngay, @Param("soluong") String count, @Param("id_car") int idCar, @Param("id") int id);

    @Query(value = "select * from ticket where id=:id", nativeQuery = true)
    Ticket findById(@Param("id") int id);

    @Query(value = "select * from ticket where den like  :den", nativeQuery = true)
    List<Ticket> search(@Param("den") String den);

}
