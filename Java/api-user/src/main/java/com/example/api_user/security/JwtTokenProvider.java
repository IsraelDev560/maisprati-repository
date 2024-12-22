package com.example.api_user.security;

import com.example.api_user.model.User;
import com.example.api_user.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secretKey;

    @Autowired
    private UserRepository repository;

    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    public String extractId(String token){
        return extractClaim(token, Claims::getId);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);

        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token){
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }

    public String generateToken(UserDetails userDetails){
        Map<String, Object> claims = new HashMap<>();
        User user = repository.findByNome(userDetails.getUsername());
        return createToken(claims, userDetails.getUsername(), user.getId());
    }

    private String createToken(Map<String, Object> claims, String subject, int id){
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setId(String.valueOf(id))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+ 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        final int id = Integer.parseInt(extractId(token));
        User user = repository.findByNome(userDetails.getUsername());
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token) &&  id == user.getId();
    }

    private boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token){
        return extractClaim(token, Claims::getExpiration);
    }
}
