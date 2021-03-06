<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function index()
	{
		$this->load->helper('url');
		$data = array();
		$data['title'] = 'chan ideals';
		$this->load->view('include/header',$data);
		$this->load->view('include/body');
		$this->load->view('partials/about');
		$this->load->view('partials/artPage');
		$this->load->view('partials/dashboard');
		$this->load->view('partials/error');
		$this->load->view('partials/home');
		$this->load->view('partials/login');
		$this->load->view('include/footer');
	}

	public function about()
	{
        if($this->input->is_ajax_request())
        {
	        $data= file_get_contents("php://input");
            $this->output->set_output(json_encode($data));
        }else{
            exit('Directory Access forbidden.');
        }
	}

	public function login()
	{
        if($this->input->is_ajax_request())
        {

					$firstName = $this->input->post('firstName');
					$lastName = $this->input->post('lastName');
					$password = $this->input->post('password');

					$this->load->model('UserModel');

					$this->UserModel->insert_entry($firstName, $lastName, $password);
          $this->output->set_output(json_encode($firstName));

        }else{
            exit('Directory Access forbidden.');
        }
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
