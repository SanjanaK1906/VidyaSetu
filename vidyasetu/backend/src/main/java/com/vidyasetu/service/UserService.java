import org.springframework.stereotype.Service;

@Service
public class UserService {

    public String authenticateUser(String email, String password) {
        // Example logic: Replace with actual authentication logic
        if ("test@example.com".equals(email) && "password123".equals(password)) {
            return "dummy-jwt-token"; // Generate and return a real JWT in production
        }
        return null; // Return null if authentication fails
    }
}
