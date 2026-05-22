import { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { MetalFx } from 'metal-fx'

interface FormData {
  fullname: string
  email: string
  phone: string
  address: string
  connection_type: string
}

function LPGForm() {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    connection_type: '',
  })

  // Handle Input Change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Handle Form Submit
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/register',
        formData
      )

      alert(response.data.message)

      // Clear Form
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        address: '',
        connection_type: '',
      })
    } catch (error) {
      console.log(error)
      alert('Error submitting form')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#1a1a1a',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <input
        type="text"
        name="fullname"
        placeholder="Enter Full Name"
        value={formData.fullname}
        onChange={handleChange}
        required
        style={{
          backgroundColor: '#2d2d2d',
          color: '#ffffff',
          border: '1px solid #444',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '15px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{
          backgroundColor: '#2d2d2d',
          color: '#ffffff',
          border: '1px solid #444',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '15px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />

      <input
        type="text"
        name="phone"
        placeholder="Enter Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        style={{
          backgroundColor: '#2d2d2d',
          color: '#ffffff',
          border: '1px solid #444',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '15px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />

      <textarea
        name="address"
        placeholder="Enter Address"
        value={formData.address}
        onChange={handleChange}
        required
        style={{
          backgroundColor: '#2d2d2d',
          color: '#ffffff',
          border: '1px solid #444',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '15px',
          width: '100%',
          boxSizing: 'border-box',
          minHeight: '80px',
        }}
      />

      <select
        name="connection_type"
        value={formData.connection_type}
        onChange={handleChange}
        required
        style={{
          backgroundColor: '#2d2d2d',
          color: '#ffffff',
          border: '1px solid #444',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '15px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <option value="">Select Connection Type</option>

        <option value="Domestic">Domestic</option>

        <option value="Commercial">Commercial</option>
      </select>

      <MetalFx preset="gold" strength={0.81}>
        <button
          type="submit"
          style={{
            borderRadius: '100px',
            padding: '10px 30px',
            backgroundColor: '#4a4a4a',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Register
        </button>
      </MetalFx>
    </form>
  )
}

export default LPGForm