<?php

class UserModel extends CI_Model {

    var $firstName   = '';
    var $lastName = '';
    var $password    = '';

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function get_last_ten_entries()
    {
        $query = $this->db->get('User', 10);
        return $query->result();
    }

    function insert_entry($firstName, $lastName, $password)
    {
        $this->firstName   = $firstName; // please read the below note
        $this->lastName = $lastName;
        $this->password    = sha1($password);

        $this->db->insert('User', $this);
    }

    function update_entry($id, $firstName, $lastName, $password)
    {
        $this->firstName   = $firstName; // please read the below note
        $this->lastName = $lastName;
        $this->password    = $password;

        $this->db->update('User', $this, array('Id' => $id));
    }

}
?>
