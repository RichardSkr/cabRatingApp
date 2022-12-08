package meAmo.com.cabRating.repository;

import meAmo.com.cabRating.model.CabDriver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CabRepository extends JpaRepository<CabDriver, Long> {
}
