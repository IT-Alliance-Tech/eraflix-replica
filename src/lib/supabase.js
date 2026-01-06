import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Upload file
export const uploadFile = async (file, folder = 'screens') => {
  try {
    const fileName = generateFileName(file.name, folder)
    const filePath = `${folder}/${fileName}`

    const { data, error } = await supabase.storage
      .from('Era-replica') // ✅ CORRECT bucket
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      })

    if (error) {
      console.error('Supabase upload error:', error)
      throw error
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from('Era-replica') // ✅ SAME bucket
      .getPublicUrl(filePath)

    return {
      success: true,
      url: publicUrlData.publicUrl,
      path: data.path
    }
  } catch (error) {
    console.error('Upload error:', error)
    return {
      success: false,
      error: error.message || 'Upload failed'
    }
  }
}

// Generate unique filename
export const generateFileName = (originalName, folder) => {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 15)
  const extension = originalName.split('.').pop()
  return `${folder}_${timestamp}_${randomString}.${extension}`
}

// Delete file
export const deleteFile = async (filePath) => {
  try {
    const { error } = await supabase.storage
      .from('Era-replica') // ✅ SAME bucket
      .remove([filePath])

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Delete error:', error)
    return { success: false, error: error.message }
  }
}
