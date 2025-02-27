(function() {
    var type_impls = Object.fromEntries([["arrow_array",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Write-for-GenericByteBuilder%3CGenericStringType%3CO%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_builder.rs.html#291-296\">Source</a><a href=\"#impl-Write-for-GenericByteBuilder%3CGenericStringType%3CO%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"arrow_array/array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html\" title=\"trait core::fmt::Write\">Write</a> for <a class=\"type\" href=\"arrow_array/builder/type.GenericStringBuilder.html\" title=\"type arrow_array::builder::GenericStringBuilder\">GenericStringBuilder</a>&lt;O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_str\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_builder.rs.html#292-295\">Source</a><a href=\"#method.write_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#tymethod.write_str\" class=\"fn\">write_str</a>(&amp;mut self, s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Writes a string slice into this writer, returning whether the write\nsucceeded. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#tymethod.write_str\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_char\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.1.0\">1.1.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/fmt/mod.rs.html#189\">Source</a></span><a href=\"#method.write_char\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#method.write_char\" class=\"fn\">write_char</a>(&amp;mut self, c: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes a <a href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\" title=\"primitive char\"><code>char</code></a> into this writer, returning whether the write succeeded. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#method.write_char\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_fmt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/fmt/mod.rs.html#218\">Source</a></span><a href=\"#method.write_fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#method.write_fmt\" class=\"fn\">write_fmt</a>(&amp;mut self, args: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Arguments.html\" title=\"struct core::fmt::Arguments\">Arguments</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Glue for usage of the <a href=\"https://doc.rust-lang.org/nightly/core/macro.write.html\" title=\"macro core::write\"><code>write!</code></a> macro with implementors of this trait. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Write.html#method.write_fmt\">Read more</a></div></details></div></details>","Write","arrow_array::builder::StringBuilder","arrow_array::builder::LargeStringBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[4765]}