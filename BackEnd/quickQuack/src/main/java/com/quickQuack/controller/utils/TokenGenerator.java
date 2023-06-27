package com.quickQuack.controller.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import javax.crypto.SecretKey;

@RestController
@RequestMapping("/token")
public class TokenGenerator {
    private final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(
		"7f-j&CKk=coNzZc0y7_4obMP?#TfcYq%fcD0mDpenW2nc!lfGoZ|d?f&RNbDHUX6"
		.getBytes(StandardCharsets.UTF_8));

    @PostMapping
    public String generateToken(@RequestParam ("username") String username) {
        try {
            String jwtToken = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(
                    Date.from(
                        LocalDateTime.now().plusMinutes(15L)
                            .atZone(ZoneId.systemDefault())
                        .toInstant()))
                        .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
                .compact();
                
                return jwtToken.toString();
        }
        catch(Exception ex)
        {
            return ex.getMessage();
        } 
    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam String token) {
        try {
        Claims claims = Jwts.parserBuilder().setSigningKey(SECRET_KEY).build().parseClaimsJws(token).getBody();
        
        // Verificar a data de expiração do token
        Date expiration = claims.getExpiration();
        Date now = new Date();
        if (expiration != null && expiration.before(now)) {
            return "Token is expired";
        }
        
        return "Token is valid";
    } catch (Exception e) {
        return "Token is invalid";
    }
    }
}
