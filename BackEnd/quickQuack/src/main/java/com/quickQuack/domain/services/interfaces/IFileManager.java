package com.quickQuack.domain.services.interfaces;

import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

public interface IFileManager {
    boolean deleteFile(String fileName);
    String uploadFile(MultipartFile file, String filename) throws IOException;
}