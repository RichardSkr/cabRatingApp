package meAmo.com.cabRating.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@Entity
public class CabDriver {
    @Id
    @GeneratedValue
    private Long id;
    private String driverName;
    private String licensePlate;
    private String car;
    private String carColor;
    private Double rating;
}
