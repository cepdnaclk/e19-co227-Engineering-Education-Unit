package com.GES.General_Elective_Subjects.Config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    private static final String SECRET_KEY = "0XjLJtFPLPIPQGjcF0p1I8cUYG+DJWUg/yAzNszumYoTsa9eGt5TB1QeU7VIM5qbYA/CBrV6SvR/vGgBrikEoajQCF3Ti4ySOLI7nyAZbhKo7OqD18uACmPdc7KOkK34spzNuAt6AYywbW/E4SvSX81bpOZoq8YNzMWW0YFoEeA161nO/Gts8qZR6Pg1JtiKuhBkl5P6FTCdQorN4hneN+NwjweDcinTH/zplIaMJKMyiIvV/2JlBdVC8807UciT1aLpMCchQ/QZaWwnorKJSMxt5Pk13hppm2AjCqqE1GEugvNaEjs0NjVHjp0OqEqVq+5CAN7z3aIwTq0mXBhu3huTxzE1Rf1gqhLlPgTPc3h2TiQG45/X/ezZKKowaip9YLhwLO/kDLpGh/Oyo7/6QDQ5EQSqjyV+Gb404Nzo1P9+USpOJ4pSTx01d3L5WyvyDdx/ou2dMw3NfzZ9tbCJsm3/Q+ADp0IXJd+zzS+UIV/L4abQQhh87fehLBDkBC+dHcfhNUJ7j81lUavGypBf3eS7wnU17pqpYH2FCvvJKx/2rDQcFILcsiiZWKg8Ehs5Yv2/KJkNARWviLuW8NZhxWaDWU1lbVMgohfrac1BR5W8QrHSXDCCdXaLqxs9p8UYGNAVEqscaUZp1cR7lByhIbgGz5xn4o+1scvZ0wqusoALsy1NT93e6mYdYxBv5mCPwvDuoqhQ34S6BQZSLD5O2jc1HA6Bci1kJL/ZFspmTbTudKJwFnlONl6E0dCyFVk2u5FO8Tmk836O6VdGAidToZEU9ZcSUcTToZz6K9SYgTAb9cx/37OuEQvNWcPhZSBCyYe4SKjQ85Jxl4JWti7B+HeBfYGIyGpZhIQpYyD8cOZUjxjSm6SWDdCD3s1US+Pk+RvIykfRBhf7rlqQWnVKkBJexmEKyFaknqWFpPKlXO126e+G87INlX/tikWcuov2eUsC1CtdgwrZf3h4Sc7tyTxfx4LnmPH7LFWVfbifJCfO3KL82kaAcGpiNcFuyZuh4y8fhKUIxUi0sxExsS8SOB0s9pnTsMTing6FLRDkqiVlJeV4j5JkvMk6aByghZmrZKO862gV8n6L7tOmgXxaaVsR6pZ0GZtdc42cqznNM25Juz2Atmi/avzaEpfpzSKdUnFris1rQo79kt77qAhBa/WWeN6iJcFscoUxz0fhiuYelUUO1znPvaZ5SbgtRIDJGr/csN8v8sZomE8l1MmyWO1Z/P7zzTniy5AChwmGM8rYHRqnQjqKIjI30/+93Wv6t7anKGLCpFmmNwgozYF6DZfOVQl/0C3PgSFY2xPdbUriO83X4DkuvxJW0SwaZAwLNskFj6VeFhdLPpAZnE/1fkbaLL9F7Iusy8oneetxvro=";
    public String extractUserName(String token) {
        return  extractClaims(token,Claims::getSubject);
    }

    public String generateToken(UserDetails userDetails) {
        return  generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*60*24))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return  extractClaims(token, Claims::getExpiration);
    }

    public <T> T extractClaims(String token, Function<Claims,T> claimsReslover) {
        final Claims claims = extractAllClaims(token);
        return claimsReslover.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
