<?php
 
 error_reporting(E_ALL);
 ini_set('display_errors', 1);
 
 define('USER', 'admin');
 define('PASS', 'ratemymajoradmin');
 
 function dataQuery($query, $params) {
     // what kind of query is this?
     $queryType = explode('', $query);
 
     // establish database connection
     try {
         $dbh = new PDO('mysql:host=ratemymajor-db.cmxumymprxmq.us-east-1.rds.amazonaws.com;dbname=ratemymajor-db', USER, PASS);
         $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
         $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     }
     catch(PDOException $e) {
         echo $e->getMessage();
         $errorCode = $e->getCode();
     }
 
     // run query
     try {
         $queryResults = $dbh->prepare($query);
         $queryResults->execute($params);
         if($queryResults != null && 'SELECT' == $queryType[0]) {
             $results = $queryResults->fetchAll(PDO::FETCH_ASSOC);
             return $results;
         } else {
             return $queryResults->rowCount();
         }
         $queryResults = null; // first of the two steps to properly close
         $dbh = null; // second step to close the connection
	     }
     catch(PDOException $e) {
         $errorMsg = $e->getMessage();
         echo $errorMsg;
     }
 }
 
 ?>