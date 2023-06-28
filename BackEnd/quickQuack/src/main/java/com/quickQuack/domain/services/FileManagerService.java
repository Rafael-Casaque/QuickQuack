package com.quickQuack.domain.services;

import com.google.cloud.storage.Acl;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.quickQuack.domain.services.interfaces.IFileManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@Service
public class FileManagerService implements IFileManager{
    @Value("${gcp.bucket.name}")
    private String bucketName;

    @Autowired
    Storage storage;    

    @Override
    public boolean deleteFile(String fileName) {

        Blob blob = storage.get(bucketName, fileName);

        return blob.delete();
    }

    @Override
    public String uploadFile(MultipartFile file, String filename) throws IOException {

        BlobId blobId = BlobId.of(bucketName, filename);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).
                setContentType(file.getContentType()).build();
        Blob blob = storage.create(blobInfo,file.getBytes());                

        blob.createAcl(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER));                        

        return "https://storage.googleapis.com/rrc-quickquack-bucket/"+blob.getName();
    }
}